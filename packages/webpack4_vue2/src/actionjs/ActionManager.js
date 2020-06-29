const actionRootMap = {
    "/user/delete": {
        desc: "function(string id) { ... }",
        action: {
            execute(id) {
                return this.store.remove("user", id);
            }
        }
    },
    "/user/getAll": {
        desc: "function() { ... }",
        action: {
            execute() {
                return this.store.fetchAll("user");
            }
        }
    },
    "/user/add": {},
    "/user/address/delete": {},
    "/user/address/add": {},
    "/dept/delete": {},
    "/dept/add": {},
    "/dept/address/delete": {},
    "/dept/address/add": {}
};
let currentPath = "/user";
function startWith(str, pattern) {
    return str.indexOf(pattern) === 0;
}
function isExist(path) {
    for (let p in actionRootMap) {
        if (startWith(p, path)) {
            return true;
        }
    } 
    return false;
}
function combinePath(path) {
    let combinedPath = currentPath;
    if (path) {
        if (startWith(path, "/")) {
            combinedPath = path;
        } else {
            combinedPath = `${combinedPath}${combinedPath === "/" ? "" : "/"}${path}`;
        }
    }
    return combinedPath;
}
class ActionManager {
    constructor(store) {
        this.store = store;
    }
    pwd() {
        return currentPath;
    }
    cd(path) {
        switch(path) {
            case ".":
                break;
            case "..":
                if (currentPath !== "/") {
                    const currentPathArray = currentPath.substring(1).split("/");
                    currentPathArray.length--;
                    currentPath = "/" + currentPathArray.join("/");
                }
                break;
            case "/":
                currentPath = "/";
                break;
            default: 
                const newPath = combinePath(path);
                if (!isExist(newPath)) {
                    return "invalid path!";
                }
                if (actionRootMap[newPath]) {
                    return "path should not contains action!"
                }
                currentPath = newPath;
        }
        return currentPath;
    }
    ls(path) {
        let listPath = combinePath(path);
        const matchedPath = {};
        for (let p in actionRootMap) {
            const isMatched = startWith(p, listPath);
            let cp;
            if (isMatched) {
                cp = p.substring(listPath.length + 1);
                cp = cp.split("/");
                if (cp[0]) {
                    matchedPath[cp[0]] = cp.length === 1 ? actionRootMap[p] : "feature";
                }
            }
        }
        return matchedPath;
    }
    exec(path) {
        const execPath = combinePath(path);
        const actionWrapper = actionRootMap[execPath];
        if (!actionWrapper) {
            return ["not a valid action!", this.list(path)]
        } else {
            let action = null;
            if (actionWrapper.action.getAction) {
                action = actionWrapper.action.getAction();
            } else {
                action = actionWrapper.action;
            }
            action.store = this.store;
            const args = Array.from(arguments);
            args.shift();
            return [actionWrapper.desc, actionWrapper.action.execute(...args)];
        }
    }
    create(path, action, desc) {
        path = combinePath(path);
        actionMap[path] = {
            desc,
            action
        };
    }
    help() {
        return {
            pwd: "show the current path",
            cd: "swith path",
            list: "show the content of the current path or specific path",
            exec: "execute a path",
            create: "create an action",
            help: "print help information"
        };
    }
}

export default ActionManager;