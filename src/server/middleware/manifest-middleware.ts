import { Server } from "onefx";
import { logger } from "onefx/lib/integrated-gateways/logger";
import { MyContext } from "../../types/global";

export function manifestMiddleware(_: Server): Function {
  return async (ctx: MyContext, next: Function) => {
    let manifest = {};
    try {
      manifest = require("../../../dist/asset-manifest.json");
    } catch (e) {
      logger.info(`cannot load manifest: ${e.stack}`);
    }
    ctx.setState("base.manifest", manifest);
    await next();
  };
}
