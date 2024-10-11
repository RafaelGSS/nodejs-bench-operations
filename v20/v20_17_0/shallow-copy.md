## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,113,692|11058495|
|{ ...object, __proto__: null }|20,895,332|10452264|
|{ ...object, newProp: true }|773,058|389571|
|structuredClone|268,324|134163|
|JSON.parse + JSON.stringify|186,926|93470|
|loop + object.keys starting with {}|1,472,107|736496|
|loop + object.keys starting with { __proto__: null }|727,467|363736|
|loop + object.keys starting with { randomProp: true }|570,084|285056|
|object.keys + reduce(FN, {})|1,492,459|746234|
|object.keys + reduce(FN, { __proto__: null })|773,711|386856|
|object.keys + reduce(FN, { newProp: true })|558,000|279110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:31:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22113692.583071556,"samples":11058495},{"name":"{ ...object, __proto__: null }","opsSec":20895332.716303535,"samples":10452264},{"name":"{ ...object, newProp: true }","opsSec":773058.26645273,"samples":389571},{"name":"structuredClone","opsSec":268324.8064912607,"samples":134163},{"name":"JSON.parse + JSON.stringify","opsSec":186926.99773189175,"samples":93470},{"name":"loop + object.keys starting with {}","opsSec":1472107.287074185,"samples":736496},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":727467.6802969144,"samples":363736},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":570084.1616502183,"samples":285056},{"name":"object.keys + reduce(FN, {})","opsSec":1492459.2840377812,"samples":746234},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":773711.1396332127,"samples":386856},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":558000.3487427209,"samples":279110}]}-->
