## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,332,950|10688119|
|{ ...object, __proto__: null }|19,373,945|9687589|
|{ ...object, newProp: true }|622,244|315277|
|structuredClone|253,817|126909|
|JSON.parse + JSON.stringify|196,414|98270|
|loop + object.keys starting with {}|1,279,716|640007|
|loop + object.keys starting with { __proto__: null }|738,902|369651|
|loop + object.keys starting with { randomProp: true }|517,742|258956|
|object.keys + reduce(FN, {})|1,291,894|645948|
|object.keys + reduce(FN, { __proto__: null })|752,591|376645|
|object.keys + reduce(FN, { newProp: true })|523,969|261986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21332950.62722787,"samples":10688119},{"name":"{ ...object, __proto__: null }","opsSec":19373945.584573474,"samples":9687589},{"name":"{ ...object, newProp: true }","opsSec":622244.9896688447,"samples":315277},{"name":"structuredClone","opsSec":253817.73653718948,"samples":126909},{"name":"JSON.parse + JSON.stringify","opsSec":196414.9783308228,"samples":98270},{"name":"loop + object.keys starting with {}","opsSec":1279716.2023614133,"samples":640007},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":738902.4311213468,"samples":369651},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":517742.02115251945,"samples":258956},{"name":"object.keys + reduce(FN, {})","opsSec":1291894.0931643185,"samples":645948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":752591.3874771983,"samples":376645},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":523969.2847911662,"samples":261986}]}-->
