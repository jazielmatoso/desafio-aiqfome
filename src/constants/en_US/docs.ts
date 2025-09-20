export const DOCS = {
  HELLO_WORLD_SUMMARY: 'First API endpoint',
  HELLO_WORLD_DESCRIPTION: 'First API endpoint description',

  VERSION_SUMMARY: 'Endpoint which returns the API version',
  VERSION_DESCRIPTION:
    'This endpoint also returns the environment, deployed date and last commit',

  AUTH_LOGIN_SUMMARY: 'This endpoint is used for user authentication.',
  AUTH_LOGIN_DESCRIPTION:
    'This endpoint is used for user authentication, providing user data and token in return.',

  AUTH_LOGOUT_SUMMARY: 'This endpoint is used for sign out user',
  AUTH_LOGOUT_DESCRIPTION: 'This endpoint is used for sign out user',

  AUTH_FORGOTTEN_PASSWORD_SUMMARY:
    'This endpoint is used for password recovery',
  AUTH_FORGOTTEN_PASSWORD_DESCRIPTION:
    'This endpoint is used for password recovery. The email parameter needs to be passed.',

  USER_CREATE_SUMMARY: 'This endpoint is used to create the user',
  USER_CREATE_DESCRIPTION:
    'This endpoint is used to create the user. If it does not provide the necessary parameters, it will result in a validation error',

  RAFFLE_CREATE_SUMMARY: 'This endpoint is used to create the raffle',
  RAFFLE_CREATE_DESCRIPTION:
    'This endpoint is used to create the raffle. If it does not provide the necessary parameters, it will result in a validation error',

  RAFFLE_FINDALL_SUMMARY: 'This endpoint is used to list with pagination',
  RAFFLE_FINDALL_DESCRIPTION:
    'This endpoint is used to list the giveaway with pagination. Parameters such as page number, quantity per page, can be used.',

  REFRESH_TOKEN_SUMMARY: 'This endpoint is used for to get new access token.',
  REFRESH_TOKEN_DESCRIPTION:
    'This endpoint is used for to get new access token, using an refresh token in authorization header.',
};
