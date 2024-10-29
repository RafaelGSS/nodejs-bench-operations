## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|95,338,996|47669523|
|(short string) (true) String#slice and strict comparison|51,293,068|25864840|
|(long string) (true) String#endsWith|55,109,456|27555154|
|(long string) (true) String#slice and strict comparison|46,858,958|23431820|
|(short string) (false) String#endsWith|95,696,979|47853294|
|(short string) (false) String#slice and strict comparison|51,656,551|25828282|
|(long string) (false) String#endsWith|84,500,951|42250482|
|(long string) (false) String#slice and strict comparison|46,703,494|23351753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:47:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":95338996.99575555,"samples":47669523},{"name":"(short string) (true) String#slice and strict comparison","opsSec":51293068.68042987,"samples":25864840},{"name":"(long string) (true) String#endsWith","opsSec":55109456.448678955,"samples":27555154},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46858958.60259976,"samples":23431820},{"name":"(short string) (false) String#endsWith","opsSec":95696979.44908144,"samples":47853294},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51656551.7057407,"samples":25828282},{"name":"(long string) (false) String#endsWith","opsSec":84500951.32485731,"samples":42250482},{"name":"(long string) (false) String#slice and strict comparison","opsSec":46703494.97797518,"samples":23351753}]}-->
