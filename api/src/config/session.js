const ONE_HOUR = 1000 * 60 * 60;

export const {
  SESSION_SECRET = "LearningOutSessions",
  SESSION_RESAVE = false,
  SESSION_UNINITIALIZED = false,
  SESSION_NAME = "sid",
  SESSION_LIFE = ONE_HOUR,
  ENVIRONMENT = "development",
} = process.env;

const IN_PROD = ENVIRONMENT === "production";

export const SESSION_OPTIONS = {
  name: SESSION_NAME,
  cookie: {
    maxAge: +SESSION_LIFE,
    httpOnly: true,
    secure: IN_PROD,
    sameSite: true,
  },
  rolling: true,
  secret: SESSION_SECRET,
  resave: SESSION_RESAVE,
  saveUninitialized: SESSION_UNINITIALIZED,
};
