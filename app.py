from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample in-memory task list (Resets on server restart)
tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_task():
    task = request.json.get('task')
    if task:
        tasks.append(task)
        return jsonify({'message': 'Task added!', 'tasks': tasks})
    return jsonify({'error': 'Task cannot be empty'}), 400

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/delete', methods=['POST'])
def delete_task():
    task = request.json.get('task')
    if task in tasks:
        tasks.remove(task)
        return jsonify({'message': 'Task deleted!', 'tasks': tasks})
    return jsonify({'error': 'Task not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
