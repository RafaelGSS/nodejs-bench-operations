## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,341,100|8170551|
|Getter|14,159,022|7079512|
|Method|16,569,268|8284635|
|DefineProperty (getter)|16,461,087|8230544|
|DefineProperty (getter & enumerable=false)|13,861,744|6930873|
|DefineProperty (getter & configurable=false)|16,690,327|8345164|
|DefineProperty (getter & enumerable=false & configurable=false)|14,012,608|7006305|
|DefineProperty (writable)|16,396,668|8198335|
|DefineProperty (writable & enumerable=false)|17,157,603|8578802|
|DefineProperty (writable & enumerable=false & configurable=false)|17,201,763|8600882|
|DefineProperties (getter)|13,763,595|6881798|
|DefineProperties (getter & enumerable=false)|13,766,879|6883440|
|DefineProperties (getter & enumerable=false & configurable=false)|14,051,472|7025737|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:47:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16341100.433799177,"samples":8170551},{"name":"Getter","opsSec":14159022.852236804,"samples":7079512},{"name":"Method","opsSec":16569268.593649955,"samples":8284635},{"name":"DefineProperty (getter)","opsSec":16461087.379908608,"samples":8230544},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13861744.598723479,"samples":6930873},{"name":"DefineProperty (getter & configurable=false)","opsSec":16690327.570237307,"samples":8345164},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14012608.175887093,"samples":7006305},{"name":"DefineProperty (writable)","opsSec":16396668.631755348,"samples":8198335},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17157603.198224492,"samples":8578802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17201763.52425848,"samples":8600882},{"name":"DefineProperties (getter)","opsSec":13763595.763732221,"samples":6881798},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13766879.599561855,"samples":6883440},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14051472.720249515,"samples":7025737}]}-->
