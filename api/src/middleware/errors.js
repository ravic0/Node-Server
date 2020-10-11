export const asyncErrorHandler = (handler) => (...args) =>
  handler(...args).catch(args[2]);

// handler is the function
//...args => req,res,next
//args[2] = next function => .catch(err => args[2](err))
