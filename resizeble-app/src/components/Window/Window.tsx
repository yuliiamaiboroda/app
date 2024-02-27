import React, { useState } from "react";
import { ResizableWindow } from "../ResizableWindow";
import './Window.scss';
import { createText, updateText } from "../../api/api";
import { Text } from "../../types/Text";

type Props = {
  num: number;
};

export const Window: React.FC<Props> = ({ num }) => {
  const [query, setQuery] = useState('');
  const [text, setText] = useState<Text | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    };

    try {
      const newText = await createText(query);
      setText(newText);
      setQuery('');
    } catch (error) {
      console.error('Error adding text:', error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditedText(text?.title || '');
  };

  const handleSaveEdit = async () => {
    try {
      if (!text) {
        return;
      };

      const upd = await updateText(text.id, editedText);
      setText(upd);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating text:', error);
    }
  };

  return (
    <ResizableWindow className={`window--${num}`}>
      {`Window-${num}`}

      {num === 2 && (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      )}

      {text && (
        <>
          {editMode ? (
            <>
              <input 
                type="text" 
                value={editedText} 
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleSaveEdit}>Save</button>
            </>
          ) : (
            <div>
              {text.title}
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </>
        )}
    </ResizableWindow >
  );
};
