## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|299,301,827|89|
|(short string) (true) String#slice and strict comparison|856,166,520|99|
|(long string) (true) String#startsWith|199,198,310|95|
|(long string) (true) String#slice and strict comparison|856,154,473|96|
|(short string) (false) String#startsWith|881,760,592|97|
|(short string) (false) String#slice and strict comparison|852,153,824|99|
|(long string) (false) String#startsWith|872,006,720|92|
|(long string) (false) String#slice and strict comparison|857,325,714|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":299301826.860121,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":856166519.6409274,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":199198309.79338887,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":856154473.2630231,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":881760592.4785908,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":852153824.3334799,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":872006719.8026365,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":857325713.6724315,"samples":8}]}-->
