## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|777,327,633|96|
|Setter|12,172,974|96|
|Method|781,836,049|99|
|DefineProperty (setter)|782,623,225|96|
|DefineProperty (setter & enumerable=false)|12,044,756|95|
|DefineProperty (setter & configurable=false)|12,301,427|94|
|DefineProperty (setter & enumerable=false & configurable=false)|12,267,897|93|
|DefineProperty (writable)|758,494,915|94|
|DefineProperty (writable & enumerable=false)|783,400,776|96|
|DefineProperty (writable & enumerable=false & configurable=false)|786,541,885|99|
|DefineProperties (setter)|737,358,272|96|
|DefineProperties (setter & enumerable=false)|11,141,012|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,883,279|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Setter (class)","opsSec":777327632.8753906,"samples":6},{"name":"Setter","opsSec":12172974.42615378,"samples":6},{"name":"Method","opsSec":781836049.3566316,"samples":7},{"name":"DefineProperty (setter)","opsSec":782623224.569596,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12044755.82407037,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12301426.75176534,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12267896.939266022,"samples":5},{"name":"DefineProperty (writable)","opsSec":758494915.2766654,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":783400775.701278,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786541885.3913295,"samples":6},{"name":"DefineProperties (setter)","opsSec":737358271.8413352,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11141012.146952735,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11883278.77083871,"samples":5}]}-->
