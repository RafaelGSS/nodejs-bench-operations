## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,914,982|10959140|
|{ ...object, __proto__: null }|22,014,121|11007631|
|{ ...object, newProp: true }|801,790|400917|
|structuredClone|265,583|132792|
|JSON.parse + JSON.stringify|200,313|100200|
|loop + object.keys starting with {}|1,508,585|754308|
|loop + object.keys starting with { __proto__: null }|741,898|370950|
|loop + object.keys starting with { randomProp: true }|581,773|291055|
|object.keys + reduce(FN, {})|1,534,108|767072|
|object.keys + reduce(FN, { __proto__: null })|771,023|385513|
|object.keys + reduce(FN, { newProp: true })|573,718|287037|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:56:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":10959140,"opsSec":21914982.5402371},{"name":"{ ...object, __proto__: null }","samples":11007631,"opsSec":22014121.05213411},{"name":"{ ...object, newProp: true }","samples":400917,"opsSec":801790.4820197979},{"name":"structuredClone","samples":132792,"opsSec":265583.34932079416},{"name":"JSON.parse + JSON.stringify","samples":100200,"opsSec":200313.58632136963},{"name":"loop + object.keys starting with {}","samples":754308,"opsSec":1508585.8313005457},{"name":"loop + object.keys starting with { __proto__: null }","samples":370950,"opsSec":741898.7283855797},{"name":"loop + object.keys starting with { randomProp: true }","samples":291055,"opsSec":581773.8487431009},{"name":"object.keys + reduce(FN, {})","samples":767072,"opsSec":1534108.5037974392},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":385513,"opsSec":771023.2937082391},{"name":"object.keys + reduce(FN, { newProp: true })","samples":287037,"opsSec":573718.2258537835}]}-->
