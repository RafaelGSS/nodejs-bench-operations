## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,466,180|10233339|
|{ ...object, __proto__: null }|20,127,953|10064188|
|{ ...object, newProp: true }|756,023|379568|
|structuredClone|259,390|129699|
|JSON.parse + JSON.stringify|198,039|99021|
|loop + object.keys starting with {}|1,494,357|747220|
|loop + object.keys starting with { __proto__: null }|717,402|358704|
|loop + object.keys starting with { randomProp: true }|553,702|277251|
|object.keys + reduce(FN, {})|1,504,843|752493|
|object.keys + reduce(FN, { __proto__: null })|749,118|374616|
|object.keys + reduce(FN, { newProp: true })|544,429|272438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:11:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10233339,"opsSec":20466180.753672406},{"name":"{ ...object, __proto__: null }","samples":10064188,"opsSec":20127953.312980425},{"name":"{ ...object, newProp: true }","samples":379568,"opsSec":756023.5086725816},{"name":"structuredClone","samples":129699,"opsSec":259390.71423361858},{"name":"JSON.parse + JSON.stringify","samples":99021,"opsSec":198039.0904096837},{"name":"loop + object.keys starting with {}","samples":747220,"opsSec":1494357.6011218743},{"name":"loop + object.keys starting with { __proto__: null }","samples":358704,"opsSec":717402.2263468824},{"name":"loop + object.keys starting with { randomProp: true }","samples":277251,"opsSec":553702.3320180529},{"name":"object.keys + reduce(FN, {})","samples":752493,"opsSec":1504843.0218548074},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":374616,"opsSec":749118.0576451961},{"name":"object.keys + reduce(FN, { newProp: true })","samples":272438,"opsSec":544429.3338416363}]}-->
