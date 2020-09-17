type ResultSuccess<T> = { type: 'success'; value: T }
type ResultError = { type: 'error'; value: Error }

type Result<T> = ResultSuccess<T> | ResultError

export class MyArray {

  private collection = [] as any;

  add(stringParam: string): Result<string>;
  add(numberParam: number): Result<number>;

  add(param: number | string): Result<number | string> {
    // let lastValue = this.collection.lastIndexOf();
    // console.log(lastValue);
    let mixedArrayFlag = true;

    if (typeof param == 'number' && this.isNumberArray()) {
      this.collection.push(param)
      mixedArrayFlag = false;
      return { type: 'success', value: param };
    } else if (typeof param == 'string' && this.isStringArray()) {
      mixedArrayFlag = false;
      this.collection.push(param)
      return { type: 'success', value: param };
    }

    if (typeof param == 'boolean') {
      this.collection = [];
      return { type: 'error', value: new Error('You shouldn\'t be able to do this, the value cannot be boolean') }
    }

    if (mixedArrayFlag) {
      this.collection = [];
      return { type: 'error', value: new Error('You shouldn\'t be able to do this, mixed values are not allowed') }
    }

    return { type: 'error', value: new Error('Unknown error') }

  }

  private isStringArray(): boolean {
    return this.collection.every((a: any) => typeof a == 'string');
  }

  private isNumberArray(): boolean {
    return this.collection.every((a: any) => typeof a == 'number');
  }

  remove(value: any) {
    const index = this.collection.indexOf(value, 0);
    if (index > -1) {
      this.collection.splice(index, 1);
    }
  }

  getValues() {
    return this.collection
  }

}