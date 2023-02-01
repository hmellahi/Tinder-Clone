import UserModel from '../../models/UserModel';
import UserService from '../User/user.service';
import UserLikesModel from '../../models/UserLikesModel';

const feedService = {
  async updateFameRate(userId, incrementValue) {
    const user = await UserService.find(userId);
    const userModel = new UserModel();
    let { fame_rate } = user;

    if (fame_rate <= 1 || fame_rate >= 10) {
      return;
    }

    userModel.update(
      {
        fame_rate: fame_rate + incrementValue
      },
      ['id', '=', user.id]
    );
  },
  async like(likerId, likedId) {
    const userLikesModel = new UserLikesModel();
    await userLikesModel.insert({
      likerId,
      likedId
    });
    this.updateFameRate(likedId, 0.2);
  },
  async isLikedBy(firstUserId, secondUserId) {
    const userLikesModel = new UserLikesModel();
    const LikeRow = await userLikesModel.findOne([
      ['likerId', firstUserId],
      ['likedId', secondUserId]
    ]);
    return LikeRow !== null && LikeRow !== undefined;
  },
  async disLike(dislikerId, dislikedId) {
    // const userLikesModel = new UserLikesModel();
    // await userLikesModel.delete([
    //   ['liker_id', '=', likerId],
    //   ['liked_id', '=', likedId]
    // ])
    // TODO: decrease fame rate
    this.updateFameRate(dislikerId, -0.2);
  }
};

export default feedService;
