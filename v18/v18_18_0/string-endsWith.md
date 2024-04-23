## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,137,778|94|
|(short string) (true) String#slice and strict comparison|817,201,828|95|
|(long string) (true) String#endsWith|75,908,286|97|
|(long string) (true) String#slice and strict comparison|813,809,633|98|
|(short string) (false) String#endsWith|95,815,512|96|
|(short string) (false) String#slice and strict comparison|815,399,985|98|
|(long string) (false) String#endsWith|88,715,052|95|
|(long string) (false) String#slice and strict comparison|608,148,303|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81137777.62460175,"samples":4},{"name":"(short string) (true) String#slice and strict comparison","opsSec":817201827.8510116,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":75908285.80787632,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":813809633.3316144,"samples":9},{"name":"(short string) (false) String#endsWith","opsSec":95815512.48381448,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":815399984.6762452,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":88715052.42825365,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":608148302.9841871,"samples":8}]}-->
