import { addRequestMetadata } from "../core/manager";
import { RequestOptions } from "../interfaces/RequestOptions";

export function Patch(path?: string, options?: RequestOptions): MethodDecorator {
    return (target, propertyName) => addRequestMetadata({
        controllerName: target.constructor.name,
        functionName: propertyName as string,
        method: "patch",
        path: path || "",
        options: options
    });
}