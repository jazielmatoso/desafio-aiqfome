export const DOCS = {
  AUTH_LOGIN_SUMMARY: 'Este endpoint é usado para autenticação do usuário.',
  AUTH_LOGIN_DESCRIPTION:
    'Este endpoint é usado para autenticação do usuário, fornecendo dados do usuário e token em troca.',

  AUTH_LOGOUT_SUMMARY: 'Este endpoint é usado para desconectar o usuário',
  AUTH_LOGOUT_DESCRIPTION: 'Este endpoint é usado para desconectar o usuário',

  AUTH_FORGOTTEN_PASSWORD_SUMMARY:
    'Este endpoint é usado para recuperação de senha',
  AUTH_FORGOTTEN_PASSWORD_DESCRIPTION:
    'Este endpoint é usado para recuperação de senha. O parâmetro email precisa ser passado.',

  CLIENT_CREATE_SUMMARY: 'Este endpoint é usado para criar o cliente',
  CLIENT_CREATE_DESCRIPTION:
    'Este endpoint é usado para criar o cliente. Se não fornecer os parâmetros necessários, resultará em um erro de validação',

  CLIENT_FINDALL_SUMMARY:
    'Este endpoint é usado para listar os clientes com paginação',
  CLIENT_FINDALL_DESCRIPTION:
    'Este endpoint é usado para listar os clientes com paginação. Parâmetros como número da página , quantidade por pagina, podem ser usados',

  CLIENT_FINDONE_SUMMARY:
    'Este endpoint é usado para listar um único cliente por id',
  CLIENT_FINDONE_DESCRIPTION:
    'Este endpoint é usado para listar um único cliente por id. Parâmetros id é passado na url no padrão RESTful /:id',
};
