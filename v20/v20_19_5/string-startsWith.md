## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,906,400|42957493|
|(short string) (true) String#slice and strict comparison|64,339,742|32183234|
|(long string) (true) String#startsWith|65,115,019|32574432|
|(long string) (true) String#slice and strict comparison|59,078,012|29541494|
|(short string) (false) String#startsWith|100,737,779|50376956|
|(short string) (false) String#slice and strict comparison|62,754,355|31388336|
|(long string) (false) String#startsWith|90,899,954|45450010|
|(long string) (false) String#slice and strict comparison|58,358,007|29179011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42957493,"opsSec":85906400.5143326},{"name":"(short string) (true) String#slice and strict comparison","samples":32183234,"opsSec":64339742.42911032},{"name":"(long string) (true) String#startsWith","samples":32574432,"opsSec":65115019.556974985},{"name":"(long string) (true) String#slice and strict comparison","samples":29541494,"opsSec":59078012.44979148},{"name":"(short string) (false) String#startsWith","samples":50376956,"opsSec":100737779.85193451},{"name":"(short string) (false) String#slice and strict comparison","samples":31388336,"opsSec":62754355.17070548},{"name":"(long string) (false) String#startsWith","samples":45450010,"opsSec":90899954.0066334},{"name":"(long string) (false) String#slice and strict comparison","samples":29179011,"opsSec":58358007.877362095}]}-->
