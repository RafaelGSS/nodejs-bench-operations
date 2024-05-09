## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,709,416|5354709|
|{ ...object, __proto__: null }|2,214,945|1107473|
|{ ...object, newProp: true }|10,325,157|5162579|
|structuredClone|319,709|159855|
|JSON.parse + JSON.stringify|290,446|145224|
|loop + object.keys starting with {}|1,454,205|727103|
|loop + object.keys starting with { __proto__: null }|884,243|442122|
|loop + object.keys starting with { randomProp: true }|663,349|331675|
|object.keys + reduce(FN, {})|1,521,878|760940|
|object.keys + reduce(FN, { __proto__: null })|885,331|442666|
|object.keys + reduce(FN, { newProp: true })|690,966|345487|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:29:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10709416.60777169,"samples":5354709},{"name":"{ ...object, __proto__: null }","opsSec":2214945.2779286383,"samples":1107473},{"name":"{ ...object, newProp: true }","opsSec":10325157.587026969,"samples":5162579},{"name":"structuredClone","opsSec":319709.1815445078,"samples":159855},{"name":"JSON.parse + JSON.stringify","opsSec":290446.7301667427,"samples":145224},{"name":"loop + object.keys starting with {}","opsSec":1454205.3136141824,"samples":727103},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":884243.0750810573,"samples":442122},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":663349.2464362849,"samples":331675},{"name":"object.keys + reduce(FN, {})","opsSec":1521878.8677195797,"samples":760940},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":885331.5520224212,"samples":442666},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":690966.2141932853,"samples":345487}]}-->
