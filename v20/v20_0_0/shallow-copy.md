## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,400,921|4700461|
|{ ...object, __proto__: null }|9,079,238|4539620|
|{ ...object, newProp: true }|685,896|343199|
|structuredClone|257,430|128716|
|JSON.parse + JSON.stringify|196,023|98012|
|loop + object.keys starting with {}|1,303,358|651680|
|loop + object.keys starting with { __proto__: null }|725,362|362682|
|loop + object.keys starting with { randomProp: true }|508,136|254069|
|object.keys + reduce(FN, {})|1,289,708|644855|
|object.keys + reduce(FN, { __proto__: null })|741,919|370960|
|object.keys + reduce(FN, { newProp: true })|509,966|254984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:09:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9400921.25989781,"samples":4700461},{"name":"{ ...object, __proto__: null }","opsSec":9079238.595880304,"samples":4539620},{"name":"{ ...object, newProp: true }","opsSec":685896.981354897,"samples":343199},{"name":"structuredClone","opsSec":257430.34176627977,"samples":128716},{"name":"JSON.parse + JSON.stringify","opsSec":196023.01429001396,"samples":98012},{"name":"loop + object.keys starting with {}","opsSec":1303358.984028943,"samples":651680},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":725362.4080857515,"samples":362682},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":508136.39196452947,"samples":254069},{"name":"object.keys + reduce(FN, {})","opsSec":1289708.9150916024,"samples":644855},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":741919.9460935346,"samples":370960},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":509966.44451142265,"samples":254984}]}-->
