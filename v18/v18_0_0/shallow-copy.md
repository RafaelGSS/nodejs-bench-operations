## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,086,358|10547437|
|{ ...object, __proto__: null }|19,407,276|9707094|
|{ ...object, newProp: true }|687,688|347378|
|structuredClone|246,116|123059|
|JSON.parse + JSON.stringify|203,215|101682|
|loop + object.keys starting with {}|1,303,083|652358|
|loop + object.keys starting with { __proto__: null }|744,818|372413|
|loop + object.keys starting with { randomProp: true }|543,969|272073|
|object.keys + reduce(FN, {})|1,350,995|675549|
|object.keys + reduce(FN, { __proto__: null })|745,856|372940|
|object.keys + reduce(FN, { newProp: true })|540,431|270323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21086358.27421096,"samples":10547437},{"name":"{ ...object, __proto__: null }","opsSec":19407276.370222617,"samples":9707094},{"name":"{ ...object, newProp: true }","opsSec":687688.8186893319,"samples":347378},{"name":"structuredClone","opsSec":246116.80879464545,"samples":123059},{"name":"JSON.parse + JSON.stringify","opsSec":203215.7240533759,"samples":101682},{"name":"loop + object.keys starting with {}","opsSec":1303083.7416681815,"samples":652358},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":744818.2524005385,"samples":372413},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":543969.6504790112,"samples":272073},{"name":"object.keys + reduce(FN, {})","opsSec":1350995.4675499857,"samples":675549},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":745856.7829700597,"samples":372940},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":540431.2391107522,"samples":270323}]}-->
