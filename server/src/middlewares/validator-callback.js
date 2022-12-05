import  status  from '../utils/api-errors';

const {BadRequestError} =status;

export default (validator) => (req, res, next) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params
  };
  const { error, value } = validator(httpRequest);
  if (error) {
    throw new BadRequestError(error.message);
  }
  req.body = value;
  return next();
};
