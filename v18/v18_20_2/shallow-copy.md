## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,304,558|5152280|
|{ ...object, __proto__: null }|10,614,453|5307227|
|{ ...object, newProp: true }|602,119|301550|
|structuredClone|269,704|134853|
|JSON.parse + JSON.stringify|187,642|93822|
|loop + object.keys starting with {}|1,169,998|585000|
|loop + object.keys starting with { __proto__: null }|739,087|369544|
|loop + object.keys starting with { randomProp: true }|552,038|276020|
|object.keys + reduce(FN, {})|1,197,894|598948|
|object.keys + reduce(FN, { __proto__: null })|746,665|373333|
|object.keys + reduce(FN, { newProp: true })|557,191|278597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:23:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10304558.270414108,"samples":5152280},{"name":"{ ...object, __proto__: null }","opsSec":10614453.868404483,"samples":5307227},{"name":"{ ...object, newProp: true }","opsSec":602119.2481217523,"samples":301550},{"name":"structuredClone","opsSec":269704.5322295063,"samples":134853},{"name":"JSON.parse + JSON.stringify","opsSec":187642.47391603704,"samples":93822},{"name":"loop + object.keys starting with {}","opsSec":1169998.3781884739,"samples":585000},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":739087.2133890819,"samples":369544},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":552038.7025266816,"samples":276020},{"name":"object.keys + reduce(FN, {})","opsSec":1197894.8861584528,"samples":598948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":746665.7365319036,"samples":373333},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":557191.896799538,"samples":278597}]}-->
