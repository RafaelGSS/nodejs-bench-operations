## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,843,311|6921656|
|(short string) (true) String#slice and strict comparison|12,854,782|6427392|
|(long string) (true) String#startsWith|14,134,622|7067312|
|(long string) (true) String#slice and strict comparison|12,717,235|6358618|
|(short string) (false) String#startsWith|14,695,017|7347509|
|(short string) (false) String#slice and strict comparison|12,948,625|6474313|
|(long string) (false) String#startsWith|14,636,824|7318413|
|(long string) (false) String#slice and strict comparison|12,329,829|6164915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:27:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13843311.833960276,"samples":6921656},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12854782.097686244,"samples":6427392},{"name":"(long string) (true) String#startsWith","opsSec":14134622.50163551,"samples":7067312},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12717235.262314979,"samples":6358618},{"name":"(short string) (false) String#startsWith","opsSec":14695017.059834218,"samples":7347509},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12948625.301078308,"samples":6474313},{"name":"(long string) (false) String#startsWith","opsSec":14636824.448493954,"samples":7318413},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12329829.555799257,"samples":6164915}]}-->
