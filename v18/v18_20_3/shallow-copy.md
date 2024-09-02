## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,847,222|4423647|
|{ ...object, __proto__: null }|9,009,270|4504636|
|{ ...object, newProp: true }|608,150|304076|
|structuredClone|241,122|120562|
|JSON.parse + JSON.stringify|191,667|95834|
|loop + object.keys starting with {}|1,110,055|555028|
|loop + object.keys starting with { __proto__: null }|634,883|317442|
|loop + object.keys starting with { randomProp: true }|465,847|232924|
|object.keys + reduce(FN, {})|1,082,464|541233|
|object.keys + reduce(FN, { __proto__: null })|612,478|306240|
|object.keys + reduce(FN, { newProp: true })|470,250|235126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:06:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":8847222.792790107,"samples":4423647},{"name":"{ ...object, __proto__: null }","opsSec":9009270.368980318,"samples":4504636},{"name":"{ ...object, newProp: true }","opsSec":608150.9131349968,"samples":304076},{"name":"structuredClone","opsSec":241122.58026841938,"samples":120562},{"name":"JSON.parse + JSON.stringify","opsSec":191667.1326015777,"samples":95834},{"name":"loop + object.keys starting with {}","opsSec":1110055.0135957948,"samples":555028},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":634883.5106342722,"samples":317442},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":465847.8767713978,"samples":232924},{"name":"object.keys + reduce(FN, {})","opsSec":1082464.5195663972,"samples":541233},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":612478.3568125844,"samples":306240},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":470250.64789964043,"samples":235126}]}-->
