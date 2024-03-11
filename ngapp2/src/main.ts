// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// console.log("Hello");

// function myFunction(param: number | string) {
//   if (typeof(param) == "number" || typeof(param) == "string") {
//   let result = (param as any) + 100;
//   console.log("My result: " + result);
//   } else {
//   throw ("Expected a number or a string: " + param)
//   }
//   }
//   myFunction(1);
//   myFunction("London");

// function writeValue(val: string | null) {
//   console.log(`Value: ${val ?? 'Fallback value'}`);
// }
// writeValue('London');
// writeValue(null);


function writeValue(val: string, ...extraInfo: string[]) {
  console.log(`Value: ${val}, Extras: ${extraInfo}`)
  }
  writeValue("London", "Raining", "Cold");
  writeValue("Paris", "Sunny");
  writeValue("New York");