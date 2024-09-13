import { on } from "@ngrx/store";
import { User } from "../models/user.model";
import { add, remove, setAccessToken } from "../actions/user.action";
import { createRehydrateReducer } from "../persistantStore";

const initialState: User = {
  username: "",
  accessToken: "",
  refreshToken: "",
};

export const userReducer = createRehydrateReducer(
  "user",
  initialState,
  on(add, (state, { user }) => ({ ...state, ...user })),
  on(remove, (state) => initialState),
  on(setAccessToken, (state, { accessToken }) => ({
    ...state,
    accessToken: accessToken,
  })),
);
