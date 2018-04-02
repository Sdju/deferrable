export function deferable(f: Function): Function {
  return (...args: any[]) => new Promise((resolve, reject) => {
    const defers: Function[] = [];
    const defer = (f: Function) => {
      defers.push(f);
    };
    const deferHandler = async (f: Function): void => {
      await f();
    };
    try {
      const res: any = f(defer, ...args);
      if (res instanceof Promise) {
        res.then((val) => {
          Promise.all(defers.map(deferHandler)).then(() => {
            resolve(val);
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      } else {
        Promise.all(defers.reverse().map(deferHandler)).then(() => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      }
    } catch (err) {
      reject(err);
    }
  });
}
