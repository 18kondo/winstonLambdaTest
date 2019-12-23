import { Handler } from "aws-lambda";
import { Logger } from "./logging/logger";

export const handler: Handler = async () => {
  try {
    const logger = await new Logger(process.env.STAGE).initialize();

    logger.log({
      level: "error",
      message: "ERROR message"
    });

    logger.log({
      level: "warn",
      message: "WARN message"
    });

    logger.log({
      level: "info",
      message: "INFO message"
    });

    logger.log({
      level: "http",
      message: "HTTP message"
    });

    logger.log({
      level: "verbose",
      message: "VERBOSE message"
    });

    logger.log({
      level: "debug",
      message: "DEBUG message"
    });

    logger.log({
      level: "silly",
      message: "SILLY message"
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "we are winston"
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "error"
      })
    };
  }
};
