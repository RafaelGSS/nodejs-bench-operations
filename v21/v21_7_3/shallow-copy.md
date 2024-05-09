## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,277,071|5138536|
|{ ...object, __proto__: null }|2,218,596|1109299|
|{ ...object, newProp: true }|10,064,957|5032480|
|structuredClone|295,187|147594|
|JSON.parse + JSON.stringify|248,426|124214|
|loop + object.keys starting with {}|1,417,723|708862|
|loop + object.keys starting with { __proto__: null }|809,392|404697|
|loop + object.keys starting with { randomProp: true }|662,177|331089|
|object.keys + reduce(FN, {})|647,527|323764|
|object.keys + reduce(FN, { __proto__: null })|827,986|413994|
|object.keys + reduce(FN, { newProp: true })|673,295|336648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10277071.815009462,"samples":5138536},{"name":"{ ...object, __proto__: null }","opsSec":2218596.2029366186,"samples":1109299},{"name":"{ ...object, newProp: true }","opsSec":10064957.926615676,"samples":5032480},{"name":"structuredClone","opsSec":295187.55013419525,"samples":147594},{"name":"JSON.parse + JSON.stringify","opsSec":248426.20884727375,"samples":124214},{"name":"loop + object.keys starting with {}","opsSec":1417723.937620296,"samples":708862},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":809392.9089385048,"samples":404697},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":662177.219956197,"samples":331089},{"name":"object.keys + reduce(FN, {})","opsSec":647527.7448736689,"samples":323764},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":827986.8805610242,"samples":413994},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":673295.2849610691,"samples":336648}]}-->
