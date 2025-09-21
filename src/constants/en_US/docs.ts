export const DOCS = {
  AUTH_LOGIN_SUMMARY: 'This endpoint is used for user authentication.',
  AUTH_LOGIN_DESCRIPTION:
    'This endpoint is used for user authentication, providing user data and a token in exchange.',

  AUTH_LOGOUT_SUMMARY: 'This endpoint is used to log the user out.',
  AUTH_LOGOUT_DESCRIPTION: 'This endpoint is used to log the user out.',

  AUTH_FORGOTTEN_PASSWORD_SUMMARY:
    'This endpoint is used for password recovery.',
  AUTH_FORGOTTEN_PASSWORD_DESCRIPTION:
    'This endpoint is used for password recovery. The email parameter must be passed.',

  CLIENT_CREATE_SUMMARY: 'This endpoint is used to create the client.',
  CLIENT_CREATE_DESCRIPTION:
    'This endpoint is used to create the client. Failure to provide the required parameters will result in a validation error.',

  CLIENT_FINDALL_SUMMARY:
    'This endpoint is used to list customers with pagination.',
  CLIENT_FINDALL_DESCRIPTION:
    'This endpoint is used to list customers with pagination. Parameters such as page number and quantity per page can be used.',

  CLIENT_FINDONE_SUMMARY:
    'This endpoint is used to list a single customer by ID.',
  CLIENT_FINDONE_DESCRIPTION:
    'This endpoint is used to list a single customer by ID. The id parameter is passed in the URL using the RESTful /:id pattern.',
};
