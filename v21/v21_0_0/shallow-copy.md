## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,954,997|4977499|
|{ ...object, __proto__: null }|2,226,060|1113031|
|{ ...object, newProp: true }|10,011,808|5005905|
|structuredClone|277,320|138661|
|JSON.parse + JSON.stringify|249,426|124714|
|loop + object.keys starting with {}|1,413,122|706562|
|loop + object.keys starting with { __proto__: null }|812,495|406248|
|loop + object.keys starting with { randomProp: true }|653,118|326560|
|object.keys + reduce(FN, {})|1,469,486|734744|
|object.keys + reduce(FN, { __proto__: null })|827,922|413962|
|object.keys + reduce(FN, { newProp: true })|671,880|335941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:26:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":9954997.558537114,"samples":4977499},{"name":"{ ...object, __proto__: null }","opsSec":2226060.1880737585,"samples":1113031},{"name":"{ ...object, newProp: true }","opsSec":10011808.2622632,"samples":5005905},{"name":"structuredClone","opsSec":277320.34770310187,"samples":138661},{"name":"JSON.parse + JSON.stringify","opsSec":249426.9051939667,"samples":124714},{"name":"loop + object.keys starting with {}","opsSec":1413122.3107101284,"samples":706562},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":812495.1151147637,"samples":406248},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":653118.2640832881,"samples":326560},{"name":"object.keys + reduce(FN, {})","opsSec":1469486.9307226867,"samples":734744},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":827922.6723404182,"samples":413962},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":671880.7937778527,"samples":335941}]}-->
