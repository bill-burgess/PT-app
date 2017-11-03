export default ({ username, email, password, passwordConfirm }, cb) => {
  if (isEmailInvalid(email)) {
    cb(null, {
      valid: false,
      dispatch: {type: 'AUTH_ERR', payload: 'Not a valid email address'}
    })
    return
  }
  if (username.length < 1) {
    cb(null, {
      valid: false,
      dispatch: {type: 'AUTH_ERR', payload: 'Please enter a name'}
    })
    return
  }
  if (password.length < 8) {
    cb(null, {
      valid: false,
      dispatch: {type: 'AUTH_ERR', payload: 'Password must be at least 8 characters'}
    })
    return
  }
  if (password !== passwordConfirm) {
    cb(null, {
      valid: false,
      dispatch: {type: 'AUTH_ERR', payload: 'Passwords do not match'}
    })
    return
  }
  cb(null, {valid: true})
}

function isEmailInvalid (email) {
  const arr = email.split('@')
  if (arr.length === 2 && arr[1] !== ('')) {
    const arr2 = arr[1].split('.')
    if (arr2.length > 1 && arr2[1].length) {
      return false
    }
  }
  return true
}
