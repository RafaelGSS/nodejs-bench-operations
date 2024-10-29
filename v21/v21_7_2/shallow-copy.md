## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,115,228|12559614|
|{ ...object, __proto__: null }|2,577,548|1288775|
|{ ...object, newProp: true }|21,737,231|10880334|
|structuredClone|289,468|144767|
|JSON.parse + JSON.stringify|268,016|134035|
|loop + object.keys starting with {}|1,583,892|793725|
|loop + object.keys starting with { __proto__: null }|876,948|438615|
|loop + object.keys starting with { randomProp: true }|645,538|322798|
|object.keys + reduce(FN, {})|1,667,799|833901|
|object.keys + reduce(FN, { __proto__: null })|893,122|446594|
|object.keys + reduce(FN, { newProp: true })|672,449|336226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:13:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":25115228.65098962,"samples":12559614},{"name":"{ ...object, __proto__: null }","opsSec":2577548.02044312,"samples":1288775},{"name":"{ ...object, newProp: true }","opsSec":21737231.13476281,"samples":10880334},{"name":"structuredClone","opsSec":289468.3080621684,"samples":144767},{"name":"JSON.parse + JSON.stringify","opsSec":268016.537669165,"samples":134035},{"name":"loop + object.keys starting with {}","opsSec":1583892.254881516,"samples":793725},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":876948.7362318282,"samples":438615},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":645538.0978147783,"samples":322798},{"name":"object.keys + reduce(FN, {})","opsSec":1667799.9319280845,"samples":833901},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":893122.4144486175,"samples":446594},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":672449.7056016044,"samples":336226}]}-->
