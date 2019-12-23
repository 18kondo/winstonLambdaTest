import * as winston from "winston";

export class Logger {
  private logger: winston.Logger;
  private stage: string;

  constructor(stage: string) {
    this.stage = stage;
  }

  public async initialize(): Promise<winston.Logger> {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      ),
      defaultMeta: { service: "winston-lambda" },
      transports: new winston.transports.Console()
    });

    if (this.stage !== "prd") {
      this.logger.clear();
      this.logger.add(
        new winston.transports.Console({
          level: "debug"
        })
      );
    }

    return this.logger;
  }
}
