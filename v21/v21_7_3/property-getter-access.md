## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|910,387,828|97|
|Getter|102,570,747|98|
|Method|910,503,015|99|
|DefineProperty (getter)|910,163,324|95|
|DefineProperty (getter & enumerable=false)|102,468,931|99|
|DefineProperty (getter & configurable=false)|910,839,626|98|
|DefineProperty (getter & enumerable=false & configurable=false)|102,310,790|95|
|DefineProperty (writable)|911,424,307|99|
|DefineProperty (writable & enumerable=false)|910,964,986|99|
|DefineProperty (writable & enumerable=false & configurable=false)|910,542,547|96|
|DefineProperties (getter)|73,919,335|72|
|DefineProperties (getter & enumerable=false)|63,044,937|92|
|DefineProperties (getter & enumerable=false & configurable=false)|63,618,817|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":910387828.3629899,"samples":6},{"name":"Getter","opsSec":102570746.97579397,"samples":6},{"name":"Method","opsSec":910503014.7640818,"samples":6},{"name":"DefineProperty (getter)","opsSec":910163323.6323717,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102468931.25263163,"samples":8},{"name":"DefineProperty (getter & configurable=false)","opsSec":910839625.6474742,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102310789.88621782,"samples":5},{"name":"DefineProperty (writable)","opsSec":911424306.7340267,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":910964986.2190089,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":910542547.0096309,"samples":6},{"name":"DefineProperties (getter)","opsSec":73919334.61016795,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":63044936.89310471,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":63618817.31457065,"samples":4}]}-->
