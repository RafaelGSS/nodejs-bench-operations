## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,478,551|6739276|
|(short string) (true) String#slice and strict comparison|13,676,962|6838482|
|(long string) (true) String#startsWith|13,891,931|6945966|
|(long string) (true) String#slice and strict comparison|13,517,427|6758714|
|(short string) (false) String#startsWith|14,126,228|7063115|
|(short string) (false) String#slice and strict comparison|13,473,998|6737000|
|(long string) (false) String#startsWith|13,173,576|6586789|
|(long string) (false) String#slice and strict comparison|12,460,711|6230356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:13:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13478551.649598628,"samples":6739276},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13676962.413567556,"samples":6838482},{"name":"(long string) (true) String#startsWith","opsSec":13891931.833132006,"samples":6945966},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13517427.621502064,"samples":6758714},{"name":"(short string) (false) String#startsWith","opsSec":14126228.333029255,"samples":7063115},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13473998.437127806,"samples":6737000},{"name":"(long string) (false) String#startsWith","opsSec":13173576.919606641,"samples":6586789},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12460711.32724702,"samples":6230356}]}-->
