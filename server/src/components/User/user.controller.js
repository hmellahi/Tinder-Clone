import HttpStatusCode from '../../enums/HttpStatusCode';
import ControllerResponse from '../../utils/ControllerResponse';
import userService from './user.service';

const AuthController = {
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  find: async (userId) => {
    const user = await userService.find(userId);
    return {
      statusCode: 200,
      body: {
        data: user
      }
    };
  },

  /**
   * Update User Settings
   * @async
   * @method
   * @returns {Promise.<ControllerResponse> }
   */
  updateSettings: async (req) => {
    const settings = req.body;
    const userID = 6;
    await userService.updateSettings(userID, settings);
    return ControllerResponse(HttpStatusCode.OK, 'Setting Updated in successfully!');
  },

  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  like: async (userId) => {
    const data = await userService.like(userId);
    return {
      statusCode: 200,
      body: {
        data
      }
    };
  }
};

export default AuthController;
