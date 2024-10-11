## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,804,496|10905691|
|{ ...object, __proto__: null }|20,274,968|10149051|
|{ ...object, newProp: true }|606,818|307456|
|structuredClone|253,195|126598|
|JSON.parse + JSON.stringify|205,841|102925|
|loop + object.keys starting with {}|1,312,700|656541|
|loop + object.keys starting with { __proto__: null }|778,893|389448|
|loop + object.keys starting with { randomProp: true }|535,549|267775|
|object.keys + reduce(FN, {})|1,331,569|665786|
|object.keys + reduce(FN, { __proto__: null })|786,045|393030|
|object.keys + reduce(FN, { newProp: true })|554,828|277433|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:49:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":21804496.8812378,"samples":10905691},{"name":"{ ...object, __proto__: null }","opsSec":20274968.747258626,"samples":10149051},{"name":"{ ...object, newProp: true }","opsSec":606818.6377329344,"samples":307456},{"name":"structuredClone","opsSec":253195.18774983767,"samples":126598},{"name":"JSON.parse + JSON.stringify","opsSec":205841.53373771734,"samples":102925},{"name":"loop + object.keys starting with {}","opsSec":1312700.7418219468,"samples":656541},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":778893.4795007004,"samples":389448},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":535549.1945340114,"samples":267775},{"name":"object.keys + reduce(FN, {})","opsSec":1331569.9360665993,"samples":665786},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":786045.0258422578,"samples":393030},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":554828.5479633553,"samples":277433}]}-->
