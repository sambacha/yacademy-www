<!-- copyright 2020 yearn.finance && the contributors -->
<p align="center">
 <img src="https://raw.githubusercontent.com/gist/sambacha/9a62174a080ead34271ff5d187a24343/raw/02cad2900f4cedb87895cc57729030e095d2869f/gh_banner.svg" align="right" width="350">
	<h1 align="left">YAcademy</h1>
 <h3 align="center"> </h3>
 <p align="center">
<align="center">

 [![Twitter Follow](https://img.shields.io/twitter/follow/iearnfinance.svg?label=iearnfinance&style=social)](https://twitter.com/iearnfinance) [![Discord](https://img.shields.io/discord/734804446353031319.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/734804446353031319/) [![Telegram](https://img.shields.io/badge/chat-on%20Telegram-blue.svg)](https://t.me/yearnfinance) <img alt="Discourse users" src="https://img.shields.io/discourse/users?server=https%3A%2F%2Fgov.yearn.finance%2F">

 </center>
  </p>
</p>


## Overview

Yearn Finance Community Forums and Support - [gov.yearn.finance/](https://gov.yearn.finance/)

## Contributing to Yearn

This is a living guide that defines a development process for yearn.finance
protocol.

We want to make contributing to this project as easy and transparent as
possible, whether it's:

-   Bug report.
-   Current state of the code discussion.
-   Fix submission.
-   Feature proposal.
-   Maintainer application.

### We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as
accept pull requests.

Pull requests are the best way to propose changes to the codebase (we use GitHub
[flow](https://guides.GitHub.com/introduction/flow/index.html)). We welcome your
pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests or ensure it doesn't
break current tests.
3. If you've changed something impacting current docs, please update the
documentation.
4. Ensure the test suite passes (if applicable).
5. Ensure your code follows formatting rules.
6. Issue that pull request!

### Release Process

The `master` branch has the up to date changes of the codebase with working
code. Releases should be tracked via git tags to link a specific commit to a
deployment for history and documentation purposes.

### GitHub Actions

Repository uses GH actions to setup CI for
[test](https://github.com/iearn-finance/yearn-protocol/blob/master/.github/workflows/test.yaml)
harness. Be sure to setup any secret or env variable needed for your GH actions
to work.

### Bug Reports

We use GitHub issues to track public bugs. Report a bug by opening a new
[issue](https://github.com/iearn-finance/yearn-protocol/issues/new); it's that
easy!

Before adding a new issue, please check that your issue is not already
identified or hasn't been handled by searching the active/closed issues.

**Great Bug Reports** tend to have:

-   A clear and concise summary of an issue.
-   Steps to reproduce a bug.
-   What is expected to happen.
-   What actually happens.
-   Notes.

### Consistent Coding Style

-   Setup [prettier](https://github.com/prettier/prettier) and
[solium](https://github.com/duaraghav8/Ethlint) linters into your local coding
environment.
-   Check that your changes adhere to the linting rules before pushing by
running `yarn lint:check` and `yarn lint:fix`.
-   Merging may be blocked if a PR does not follow the coding style guidelines.

## Security

| Point of contact  |  Method  |
| :---: | :---: |
| GitHub | [issues](https://github.com/iearn-finance/yearn-security/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) |
| milkyklim | [@milkyklim](https://github.com/milkyklim) |
| banteg | [@banteg](https://github.com/banteg) |
| lehnberg | [@lehnberg](https://github.com/lehnberg) |

## Governance

 1. Review [YIP-0](YIPS/yip-0.md).
 2. Fork the repository by clicking "Fork" in the top right.
 3. Add your YIP to your fork of the repository. There is a [template YIP
here](yip-X.md).
 4. Submit a Pull Request to yEarn's [YIPs
repository](https://github.com/iearn-finance/YIPS/).

Your first PR should be a first draft of the final YIP. It must meet the
formatting criteria enforced by the build (largely, correct metadata in the
header). An editor will manually review the first PR for a new YIP and assign
it a number before merging it. Make sure you include a `discussions-to` header
with the URL to a new thread on
[gov.yearn.finance](https://gov.yearn.finance/) where people can discuss the YIP as a whole.


## Licenses 

SPDX-License-Identifier: MIT <br>
SPDX-FileCopyrightText: Copyright 2020 yearn.finance  
