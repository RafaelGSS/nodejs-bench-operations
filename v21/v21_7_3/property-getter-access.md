## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,314,818|6657410|
|Getter|11,931,934|5965968|
|Method|13,770,197|6885099|
|DefineProperty (getter)|13,663,295|6831648|
|DefineProperty (getter & enumerable=false)|11,962,315|5981158|
|DefineProperty (getter & configurable=false)|13,580,096|6790049|
|DefineProperty (getter & enumerable=false & configurable=false)|12,175,406|6087704|
|DefineProperty (writable)|14,274,914|7137458|
|DefineProperty (writable & enumerable=false)|13,945,275|6972638|
|DefineProperty (writable & enumerable=false & configurable=false)|13,272,644|6636323|
|DefineProperties (getter)|12,028,907|6014454|
|DefineProperties (getter & enumerable=false)|11,770,276|5885139|
|DefineProperties (getter & enumerable=false & configurable=false)|11,819,339|5909670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":13314818.695509069,"samples":6657410},{"name":"Getter","opsSec":11931934.639581017,"samples":5965968},{"name":"Method","opsSec":13770197.5867188,"samples":6885099},{"name":"DefineProperty (getter)","opsSec":13663295.207558434,"samples":6831648},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11962315.904220495,"samples":5981158},{"name":"DefineProperty (getter & configurable=false)","opsSec":13580096.614937969,"samples":6790049},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12175406.855569482,"samples":6087704},{"name":"DefineProperty (writable)","opsSec":14274914.915100697,"samples":7137458},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13945275.944384877,"samples":6972638},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13272644.85846196,"samples":6636323},{"name":"DefineProperties (getter)","opsSec":12028907.10991361,"samples":6014454},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11770276.446260294,"samples":5885139},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":11819339.881546335,"samples":5909670}]}-->
