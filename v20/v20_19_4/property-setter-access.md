## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|97,303,773|48651895|
|Setter|11,272,470|5636344|
|Method|96,157,855|48079004|
|DefineProperty (setter)|97,331,184|48665598|
|DefineProperty (setter & enumerable=false)|11,393,193|5696886|
|DefineProperty (setter & configurable=false)|11,140,799|5570402|
|DefineProperty (setter & enumerable=false & configurable=false)|11,522,240|5761124|
|DefineProperty (writable)|98,122,501|49061255|
|DefineProperty (writable & enumerable=false)|97,490,675|48754603|
|DefineProperty (writable & enumerable=false & configurable=false)|98,140,752|49070391|
|DefineProperties (setter)|91,810,006|45931501|
|DefineProperties (setter & enumerable=false)|11,438,685|5723685|
|DefineProperties (setter & enumerable=false & configurable=false)|11,520,397|5760200|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:50:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":48651895,"opsSec":97303773.263751},{"name":"Setter","samples":5636344,"opsSec":11272470.215875428},{"name":"Method","samples":48079004,"opsSec":96157855.68595658},{"name":"DefineProperty (setter)","samples":48665598,"opsSec":97331184.70958257},{"name":"DefineProperty (setter & enumerable=false)","samples":5696886,"opsSec":11393193.863770578},{"name":"DefineProperty (setter & configurable=false)","samples":5570402,"opsSec":11140799.744214498},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5761124,"opsSec":11522240.533588134},{"name":"DefineProperty (writable)","samples":49061255,"opsSec":98122501.36521989},{"name":"DefineProperty (writable & enumerable=false)","samples":48754603,"opsSec":97490675.55733411},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49070391,"opsSec":98140752.55777423},{"name":"DefineProperties (setter)","samples":45931501,"opsSec":91810006.50994226},{"name":"DefineProperties (setter & enumerable=false)","samples":5723685,"opsSec":11438685.795498801},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5760200,"opsSec":11520397.396390188}]}-->
