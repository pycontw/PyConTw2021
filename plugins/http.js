export default function ({ $http }) {
    const token = process.env.AUTH_TOKEN || ''
    $http.setToken(token, 'Token')
    $http.onError((error) => {
        return error.response.data
    })
}
