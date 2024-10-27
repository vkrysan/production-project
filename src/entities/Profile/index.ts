import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';

export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard,
};
