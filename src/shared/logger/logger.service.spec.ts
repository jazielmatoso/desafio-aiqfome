import { Test, TestingModule } from '@nestjs/testing';
import { AppLogger } from './logger.service';

const mockCreateLoggerInfo = jest.fn();
const mockCreateLoggerError = jest.fn();
const mockCreateLoggerWarn = jest.fn();
const mockCreateLoggerDebug = jest.fn();
const mockCreateLoggerVerbose = jest.fn();

jest.mock('winston', () => {
  const currentWinston = jest.requireActual('winston');
  return {
    ...currentWinston,
    createLogger: () => ({
      info: mockCreateLoggerInfo,
      error: mockCreateLoggerError,
      warn: mockCreateLoggerWarn,
      debug: mockCreateLoggerDebug,
      verbose: mockCreateLoggerVerbose,
    }),
  };
});

describe('AppLogger', () => {
  let service: AppLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppLogger],
    }).compile();

    service = await module.resolve<AppLogger>(AppLogger);
    module.useLogger(false);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call winslon info method with initial context when log method is called', () => {
    service.setContext('initial-context');
    service.log('message');
    expect(mockCreateLoggerInfo).toHaveBeenCalled();
    expect(mockCreateLoggerInfo).toHaveBeenCalledWith('message', { context: 'initial-context', meta: {} });
  });

  it('should call winslon error method with initial context when error method is called', () => {
    service.setContext('initial-context');
    service.error('message');
    expect(mockCreateLoggerError).toHaveBeenCalled();
    expect(mockCreateLoggerError).toHaveBeenCalledWith('message', { context: 'initial-context', meta: {} });
  });

  it('should call winslon warn method with initial context when warn method is called', () => {
    service.setContext('initial-context');
    service.warn('message');
    expect(mockCreateLoggerWarn).toHaveBeenCalled();
    expect(mockCreateLoggerWarn).toHaveBeenCalledWith('message', { context: 'initial-context', meta: {} });
  });

  it('should call winslon debug method with initial context when debug method is called', () => {
    service.setContext('initial-context');
    service.debug('message');
    expect(mockCreateLoggerDebug).toHaveBeenCalled();
    expect(mockCreateLoggerDebug).toHaveBeenCalledWith('message', { context: 'initial-context', meta: {} });
  });

  it('should call winslon verbose method with initial context when verbose method is called', () => {
    service.setContext('initial-context');
    service.verbose('message');
    expect(mockCreateLoggerVerbose).toHaveBeenCalled();
    expect(mockCreateLoggerVerbose).toHaveBeenCalledWith('message', { context: 'initial-context', meta: {} });
  });
});
