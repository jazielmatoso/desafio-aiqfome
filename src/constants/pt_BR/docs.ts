export const DOCS = {
  HELLO_WORLD_SUMMARY: 'Primeiro endpoint da API',
  HELLO_WORLD_DESCRIPTION: 'Descrição do primeiro endpoint da API',

  VERSION_SUMMARY: 'Endpoint que retorna a versão atual da API',
  VERSION_DESCRIPTION: 'Esse endpoint também retorna o ambiente, a data do último deploy e o último commit',

  AUTH_LOGIN_SUMMARY: 'Este endpoint é usado para autenticação do usuário.',
  AUTH_LOGIN_DESCRIPTION:
    'Este endpoint é usado para autenticação do usuário, fornecendo dados do usuário e token em troca.',

  AUTH_LOGOUT_SUMMARY: 'Este endpoint é usado para desconectar o usuário',
  AUTH_LOGOUT_DESCRIPTION: 'Este endpoint é usado para desconectar o usuário',

  AUTH_FORGOTTEN_PASSWORD_SUMMARY: 'Este endpoint é usado para recuperação de senha',
  AUTH_FORGOTTEN_PASSWORD_DESCRIPTION:
    'Este endpoint é usado para recuperação de senha. O parâmetro email precisa ser passado.',

  USER_CREATE_SUMMARY: 'Este endpoint é usado para criar o usuário',
  USER_CREATE_DESCRIPTION:
    'Este endpoint é usado para criar o usuário. Se não fornecer os parâmetros necessários, resultará em um erro de validação',

  RAFFLE_CREATE_SUMMARY: 'Este endpoint é usado para criar o sorteio',
  RAFFLE_CREATE_DESCRIPTION:
    'Este endpoint é usado para criar o sorteio. Se não fornecer os parâmetros necessários, resultará em um erro de validação',

  RAFFLE_FINDALL_SUMMARY: 'Este endpoint é usado para listar com paginação',
  RAFFLE_FINDALL_DESCRIPTION:
    'Este endpoint é usado para listar o sorteio com paginação. Parâmetros como número da página , quantidade por pagina, podem ser usados',

  REFRESH_TOKEN_SUMMARY: 'Este endpoint é usado para obter um novo token de acesso.',
  REFRESH_TOKEN_DESCRIPTION:
    'Este endpoint é usado para obter um novo token de acesso, usando um token de atualização no cabeçalho de autorização.',
};
