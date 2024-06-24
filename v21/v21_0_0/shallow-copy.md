## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,019,651|5509826|
|{ ...object, __proto__: null }|2,288,333|1144167|
|{ ...object, newProp: true }|10,901,414|5450708|
|structuredClone|274,109|137055|
|JSON.parse + JSON.stringify|250,761|125381|
|loop + object.keys starting with {}|1,442,844|721423|
|loop + object.keys starting with { __proto__: null }|803,444|401723|
|loop + object.keys starting with { randomProp: true }|634,502|317252|
|object.keys + reduce(FN, {})|1,469,163|734582|
|object.keys + reduce(FN, { __proto__: null })|796,559|398280|
|object.keys + reduce(FN, { newProp: true })|656,284|328143|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:01:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11019651.3300822,"samples":5509826},{"name":"{ ...object, __proto__: null }","opsSec":2288333.69869422,"samples":1144167},{"name":"{ ...object, newProp: true }","opsSec":10901414.38465952,"samples":5450708},{"name":"structuredClone","opsSec":274109.7845785753,"samples":137055},{"name":"JSON.parse + JSON.stringify","opsSec":250761.5623695741,"samples":125381},{"name":"loop + object.keys starting with {}","opsSec":1442844.6574340772,"samples":721423},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":803444.5948760081,"samples":401723},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":634502.5249552088,"samples":317252},{"name":"object.keys + reduce(FN, {})","opsSec":1469163.9493139707,"samples":734582},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":796559.8317207713,"samples":398280},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":656284.5782533812,"samples":328143}]}-->
