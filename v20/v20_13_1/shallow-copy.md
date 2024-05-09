## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,679,046|5839524|
|{ ...object, __proto__: null }|10,838,698|5419353|
|{ ...object, newProp: true }|869,467|434734|
|structuredClone|301,381|150691|
|JSON.parse + JSON.stringify|186,719|93363|
|loop + object.keys starting with {}|1,416,953|708477|
|loop + object.keys starting with { __proto__: null }|857,825|428913|
|loop + object.keys starting with { randomProp: true }|636,536|318269|
|object.keys + reduce(FN, {})|1,449,664|724833|
|object.keys + reduce(FN, { __proto__: null })|824,315|412158|
|object.keys + reduce(FN, { newProp: true })|648,508|324255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:25:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11679046.505085552,"samples":5839524},{"name":"{ ...object, __proto__: null }","opsSec":10838698.586303072,"samples":5419353},{"name":"{ ...object, newProp: true }","opsSec":869467.3305100112,"samples":434734},{"name":"structuredClone","opsSec":301381.8553367433,"samples":150691},{"name":"JSON.parse + JSON.stringify","opsSec":186719.8494480965,"samples":93363},{"name":"loop + object.keys starting with {}","opsSec":1416953.4502213597,"samples":708477},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":857825.471579209,"samples":428913},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":636536.2240646466,"samples":318269},{"name":"object.keys + reduce(FN, {})","opsSec":1449664.245906565,"samples":724833},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":824315.8301910644,"samples":412158},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":648508.2114140895,"samples":324255}]}-->
