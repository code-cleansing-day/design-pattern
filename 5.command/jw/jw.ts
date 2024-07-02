/*
 * **Bank**
 */

/**
 * Client
 */
interface Client {
  makeCommand(): void;
  command(): void;
  initReceiver(): void;
}

/**
 * Invoker
 */
class BankManager {
  private _state: State;
  private _commands: Record<string, ICommand> = {};

  constructor(state: State) {
    this._state = state;
  }

  registerCommands(...commands: ICommand[]) {
    for (const command of commands) {
      this._commands[command.constructor.name] = command;
    }
  }

  executeCommand(commandName: string, amount: number) {
    this._commands[commandName].execute(this._state, amount);
  }
}

/**
 * Receiver
 */
class State {
  private _state: number;

  constructor(state: number) {
    this._state = state;
  }

  getState() {
    return this._state;
  }

  setState(value: number) {
    this._state = value;
  }
}

/**
 * Command Interface
 */
interface ICommand {
  execute(state: State, amount: number): void;
}

/**
 * Command
 */
class Deposit implements ICommand {
  execute(state: State, amount: number) {
    const prevState = state.getState();
    state.setState(prevState + amount);
  }
}

class Withdrawal implements ICommand {
  execute(state: State, amount: number) {
    const prevState = state.getState();
    state.setState(prevState - amount);
  }
}

// 1. 커맨드 생성
const deposit = new Deposit();
const withdrawal = new Withdrawal();

// 2. 리시버 생성
const state = new State(0);

// 3. 인보커 생성 & 리시버 등록
const bankManager = new BankManager(state);

// 4. 커맨드 등록
bankManager.registerCommands(deposit, withdrawal);

// 5. 커맨드 지시
bankManager.executeCommand("Deposit", 100);
bankManager.executeCommand("Deposit", 1000);

console.log(state.getState());

bankManager.executeCommand("Withdrawal", 1000);

console.log(state.getState());
