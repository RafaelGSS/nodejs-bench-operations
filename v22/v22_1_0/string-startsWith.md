## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,577,807|7788904|
|(short string) (true) String#slice and strict comparison|16,069,674|8034839|
|(long string) (true) String#startsWith|14,487,029|7243515|
|(long string) (true) String#slice and strict comparison|16,060,720|8030361|
|(short string) (false) String#startsWith|15,943,059|7971530|
|(short string) (false) String#slice and strict comparison|16,145,025|8072513|
|(long string) (false) String#startsWith|15,633,809|7816905|
|(long string) (false) String#slice and strict comparison|15,927,858|7963930|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:53:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15577807.127607184,"samples":7788904},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16069674.528960586,"samples":8034839},{"name":"(long string) (true) String#startsWith","opsSec":14487029.507463336,"samples":7243515},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16060720.136948355,"samples":8030361},{"name":"(short string) (false) String#startsWith","opsSec":15943059.713073663,"samples":7971530},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16145025.612430213,"samples":8072513},{"name":"(long string) (false) String#startsWith","opsSec":15633809.562184934,"samples":7816905},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15927858.980587821,"samples":7963930}]}-->
