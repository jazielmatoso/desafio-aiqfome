import * as bcrypt from 'bcrypt';

export const generateHash = async (value: string): Promise<string> => {
  const saltOrRounds = 10;

  return await bcrypt.hash(value, saltOrRounds);
};

export const compare = async (
  value: string,
  hashValue: string,
): Promise<boolean> => {
  return await bcrypt.compare(value, hashValue);
};
