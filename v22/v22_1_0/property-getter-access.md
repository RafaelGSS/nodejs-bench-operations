## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,157,219|8078610|
|Getter|13,995,165|6997583|
|Method|15,982,193|7991097|
|DefineProperty (getter)|16,036,478|8018240|
|DefineProperty (getter & enumerable=false)|13,870,138|6935070|
|DefineProperty (getter & configurable=false)|16,013,530|8006766|
|DefineProperty (getter & enumerable=false & configurable=false)|13,884,371|6942186|
|DefineProperty (writable)|16,070,589|8035295|
|DefineProperty (writable & enumerable=false)|16,065,461|8032731|
|DefineProperty (writable & enumerable=false & configurable=false)|16,097,730|8048866|
|DefineProperties (getter)|13,962,143|6981072|
|DefineProperties (getter & enumerable=false)|14,003,604|7001803|
|DefineProperties (getter & enumerable=false & configurable=false)|13,991,465|6995733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:40:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16157219.676880302,"samples":8078610},{"name":"Getter","opsSec":13995165.356243458,"samples":6997583},{"name":"Method","opsSec":15982193.104989672,"samples":7991097},{"name":"DefineProperty (getter)","opsSec":16036478.107823057,"samples":8018240},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13870138.141382998,"samples":6935070},{"name":"DefineProperty (getter & configurable=false)","opsSec":16013530.366640672,"samples":8006766},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13884371.278002348,"samples":6942186},{"name":"DefineProperty (writable)","opsSec":16070589.26075054,"samples":8035295},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16065461.004010279,"samples":8032731},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16097730.422881255,"samples":8048866},{"name":"DefineProperties (getter)","opsSec":13962143.720461817,"samples":6981072},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14003604.515445225,"samples":7001803},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13991465.216528788,"samples":6995733}]}-->
